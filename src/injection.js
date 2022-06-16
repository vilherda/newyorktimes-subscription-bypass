// Helper function to find an element with an XPath expression and
// execute an anonymous function with the selected element as parameter
var findAndExec = (xpathExpr, execFunc) => {
  const elementList = document.evaluate(xpathExpr, document);
  if (elementList != null) {
    const element = elementList.iterateNext();
    if (element != null) {
      execFunc(element);
    }
  }
};

findAndExec('/html/body/div/div/div[2]', (element) => element.remove());
findAndExec('/html/body/div/div/div[1]', (element) => element.style.position = 'inherit');
findAndExec('/html/body/div/div/div/div[3]', (element) => element.remove());
