describe("criteria", () => {

    var criteriaComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.criteria");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        criteriaComponent = $controller("criteriaComponent", { criteriaActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<criteria></criteria>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(criteriaComponent).toBeDefined();
    });
})
