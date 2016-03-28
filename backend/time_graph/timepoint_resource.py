import time

import datetime
from twisted.web import resource

from time_graph.influx import influx_client
from time_graph.point_schema import point_schema, points_schema


class TimePointResource(resource.Resource):
    isLeaf = True

    def setCROSSHeaders(self, request):
        request.setHeader('Access-Control-Allow-Origin', '*')
        request.setHeader('Access-Control-Allow-Methods', 'GET, POST')
        request.setHeader('Access-Control-Allow-Headers', 'accept, content-type')

    def render_POST(self, request):

        input_data = request.content.getvalue()
        print(input_data)
        input_data_obj = point_schema.loads(input_data)

        new_record = input_data_obj.data
        new_record['time'] = int(round(time.time()*10**9))

        data = [{
            'measurement': 'points_graph',
            'time': new_record['time'],
            'fields': {
                "value": new_record['value']
            }
        }]
        res = influx_client.write_points(data)
        self.setCROSSHeaders(request)
        request.setResponseCode(204)
        return ''

    def render_GET(self, request):
        self.setCROSSHeaders(request)

        default_filter_time = time.mktime((datetime.datetime.now() - datetime.timedelta(minutes=15)).timetuple())*10**9
        #time.mktime(dateutil.parser.parse(in_data['time']).timetuple())*10**9
        time_filter = default_filter_time
        query = 'SELECT * FROM points_graph WHERE time >= %d' % (time_filter,)
        print(query)
        res = influx_client.query(query)
        result = points_schema.dumps(res['points_graph'])
        return result.data

    def render_OPTIONS(self, request):
        self.setCROSSHeaders(request)
        request.setHeader(b'content-type', b'application/json')
        request.setResponseCode(204)

        return ''
