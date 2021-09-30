const fibonacci = () => {
  let n = parseInt(
    prompt("Enter the number of fibonacci sequence you want to print")
  );
  if (n < 1) return alert("Enter value greater than 1");
  let n1 = 0,
    n2 = 1,
    n3;
  document.write(`Fibonacci series:  `);
  for (let i = 0; i <= n; i++) {
    document.write(n1 + "   ");
    // console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};
