describe("role", () => {

    var roleComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.role");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        roleComponent = $controller("roleComponent", { roleActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<role></role>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(roleComponent).toBeDefined();
    });
})
