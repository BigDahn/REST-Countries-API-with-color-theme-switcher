export default function FullCountryName(name) {
  console.log(name);
  let d = new Intl.DisplayNames(["en"], { type: "region" });
  console.log(d);
  return "ess";
}
