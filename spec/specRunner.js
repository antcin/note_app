let tests = unitTests.concat(featureTests);

importHTMLbody('index.html')
  .then(() => {
  let testNotebook = new Notebook();
  let inter = new Interface(testNotebook);
  inter.show();
  jerry(tests)
})
