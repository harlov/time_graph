describe('AboutCtrl', function() {

    beforeEach(module('timegraph'));

    var $scope, aboutCtrl;

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $scope = _$rootScope_.$new();
        aboutCtrl = _$controller_('AboutCtrl', {$scope: $scope});
    }));

    it('should ...', function() {
        //expect(aboutCtrl.myModel).toEqual();
        expect(1).toEqual(1);

    });

});
