let unitTests = notebookTests.concat(interfaceTests);
var iFace;

importHTMLbody('index.html')
  .then(() => {
  jerry(unitTests, featureTests)
})
