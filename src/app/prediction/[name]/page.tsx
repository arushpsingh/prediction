import { StyledContainer, StyledContent, StyledInfoHeader, StyledInfoItem } from "./page.styled";

interface Params {
  params: {name: String}
}

const getPredictedAge = async (name: String) =>{
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json();
}

const getPredictedGender = async(name: String) =>{
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json();
}

const getPredictedCountry = async(name: String) =>{
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json();
}

const page = async({ params }: Params) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
  
  return (
    <StyledContainer>
      <StyledContent>
        <StyledInfoHeader>Personal Info</StyledInfoHeader>
        <StyledInfoItem>Name: {age?.name}</StyledInfoItem>
        <StyledInfoItem>Age: {age?.age}</StyledInfoItem>
        <StyledInfoItem>Gender: {gender?.gender}</StyledInfoItem>
        <StyledInfoItem>Country: {country?.country[0].country_id}</StyledInfoItem>
      </StyledContent>
    </StyledContainer>
  )
}

export default page