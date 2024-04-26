import Month from "./Month";
import { months } from "../data";
import './Months.css';

export default function Months(){
  return (
    <section >
  <ul className="months-list">
    {months.map((monthItem) => (
    <Month key={monthItem.title} {...monthItem} />))}
  </ul>
  </section>
  )
}