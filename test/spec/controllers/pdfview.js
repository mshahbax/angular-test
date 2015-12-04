'use strict';

describe('Controller: PdfviewCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var PdfviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PdfviewCtrl = $controller('PdfviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PdfviewCtrl.awesomeThings.length).toBe(3);
  });
});
