import dateutil.parser
import time
from marshmallow import Schema, fields, pre_dump


class Point(Schema):
    time = fields.Int()
    value = fields.Float()

    @pre_dump
    def convert_to_epoch(self, in_data):
        in_data['time'] = time.mktime(dateutil.parser.parse(in_data['time']).timetuple())*10**9
        return in_data

point_schema = Point()
points_schema = Point(many=True)
