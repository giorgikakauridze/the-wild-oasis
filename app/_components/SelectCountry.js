import { getCountries } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectCountry({ defaultCountry, name, id, className }) {
  const res = await getCountries();
  const countries = res.data;

  const flag =
    countries
      .find((country) => country.country === defaultCountry)
      ?.iso2.toLowerCase() ?? "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%https://flagcdn.com/${flag.toLowerCase()}.svg`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c, i) => (
        <option
          key={i}
          value={`${c.country}%https://flagcdn.com/${c.iso2.toLowerCase()}.svg`}
        >
          {c.country}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
