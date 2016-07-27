describe("user", () => {

    var userComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.user");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        userComponent = $controller("userComponent", { userActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<user></user>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(userComponent).toBeDefined();
    });
})
