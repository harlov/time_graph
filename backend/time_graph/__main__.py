from twisted.web import server, resource
from twisted.internet import reactor, endpoints
from time_graph.timepoint_resource import TimePointResource

endpoints.serverFromString(reactor, "tcp:8080").listen(server.Site(TimePointResource()))


reactor.run()