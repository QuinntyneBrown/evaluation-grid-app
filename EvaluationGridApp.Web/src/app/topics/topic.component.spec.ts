describe("topic", () => {

    var topicComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.topic");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        topicComponent = $controller("topicComponent", { topicActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<topic></topic>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(topicComponent).toBeDefined();
    });
})
