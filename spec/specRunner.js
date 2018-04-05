let unitTests = notebookTests.concat(interfaceTests);

importHTMLbody('index.html')
  .then(() => {
  jerry(unitTests, featureTests)
})
