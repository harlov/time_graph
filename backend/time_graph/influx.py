from influxdb import InfluxDBClient


influx_client = InfluxDBClient('localhost', 8086, 'root', 'root', 'timegraph')
influx_client.create_database('timegraph')
