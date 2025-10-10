export const add = (a: number, b: number) => a + b;
export const multiply = (a: number, b: number) => a * b;

export default function MathComponent() {
  return (
    <div>
      <p>Add:{add(2, 3)}</p>
      <p>Multiply  :{multiply(2, 3)}</p>
    </div>
  );
}
