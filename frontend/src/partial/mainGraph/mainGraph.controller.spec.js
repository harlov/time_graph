describe('MainGraphCtrl', function() {

    beforeEach(module('timegraph'));

    var $scope, mainGraphCtrl;

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $scope = _$rootScope_.$new();
        mainGraphCtrl = _$controller_('MainGraphCtrl', {$scope: $scope});
    }));

    it('should ...', function() {
        //expect(mainGraphCtrl.myModel).toEqual();
        expect(1).toEqual(1);

    });

});
