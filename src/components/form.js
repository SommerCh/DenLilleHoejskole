import React, {useState} from 'react';
import useForm from 'react-hook-form';
import '../style/form.css';
import Check from '../img/check.png';


const Form = () =>{
const [showText, setShowText]=useState(false)
const { register, errors, handleSubmit } = useForm();

const onSubmit = data => {
alert(data);
};

return (
<div className="formen">
  <form onSubmit={handleSubmit(onSubmit)}>

    <div className="inputfelt">
      <input name="elevHold" list="l1" placeholder="Vælg et elevhold" ref={register({
        required: 'Vælg et hold fra listen' , pattern: {
        value: "[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" , message: 'Vælg et hold fra listen' , },
        })} />

      <datalist id="l1">
        <option>Dansk filmhistorie</option>
        <option>Havkajak</option>
        <option>Jagttegn og natur</option>
        <option>Krimi, virkelighed og fiction</option>
        <option>Ølbrygning</option>
        <option>Kor, sang og musik</option>
        <option>Wellness og Yoga</option>
      </datalist>
      <br />
      {errors.elevHold && errors.elevHold.message}
      <br />
    </div>

    <div className="inputfelt">
      <input name="linjefag" list="l2" placeholder="Vælg et linjefag" ref={register({
        required: 'Vælg et hold fra listen' , pattern: {
        value: "[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" , message: 'Vælg et hold fra listen' , },
        })} />

      <datalist className="dataliste" id="l2">
        <option>FOTO</option>
        <option>SANGSKRIVER</option>
        <option>E-MUSIK</option>
        <option>DANS</option>
        <option>ADVENTURESPORT</option>
      </datalist>
      <br />
      {errors.elevHold && errors.elevHold.message}
      <br />
    </div>

    <div className="navnewrap">
      <div className="inputfelt">

        <input type="text" name="firstName" placeholder="Fornavn" ref={register({ required: 'Feltet skal udfyldes' ,
          minLength: { value: 2, message: 'Mindst 2 bogstaver' , }, })} />

        <br />
        {errors.firstName && errors.firstName.message}
        <br />

      </div>
      <div className="inputfelt">
        <input type="text" name="lastName" placeholder="Efternavn" ref={register({ required: 'Feltet skal udfyldes' ,
          minLength: { value: 2, message: 'Mindst 2 bogstaver' , }, })} />

        <br />
        {errors.lastName && errors.lastName.message}
        <br />
      </div>
    </div>


    <div className="infowrap">
      <div className="inputfelt">
        <input type="number" name="mobilNummer" placeholder="Mobil nummer" ref={register({
          required: 'Feltet skal udfyldes' , minLength: { value: 8, message: 'Mindst 8 tal' , }, })} />

        <br />
        {errors.mobilNummer && errors.mobilNummer.message}
        <br />
      </div>

      <div className="inputfelt">
        <input type="email" name="email" placeholder="Email" ref={register({ required: 'Feltet skal udfyldes' , pattern:
          { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: 'Ugyldig email adresse' , }, })} />

        <br />
        {errors.email && errors.email.message}
        <br />
      </div>
    </div>

    <div className="adressewrap">
      <div className="inputfelt">
        <input type="text" name="adresse" placeholder="Adresse" ref={register({ required: 'Feltet skal udfyldes' ,
          minLength: { value: 5, message: 'Mindst 5 bogstaver' , }, })} />

        <br />
        {errors.adresse && errors.adresse.message}
        <br />
      </div>
      <div className="inputfelt">
        <input type="number" name="postNummer" placeholder="Postnummer" ref={register({ required: 'Feltet skal udfyldes'
          , minLength: { value: 4, message: 'Mindst 4 tal' , }, })} />

        <br />
        {errors.postNummer && errors.postNummer.message}
        <br />
      </div>
      <div className="inputfelt">
        <input type="text" name="by" placeholder="By" ref={register({ required: 'Feltet skal udfyldes' , minLength: {
          value: 2, message: 'Mindst 2 bogstaver' , }, })} />

        <br />
        {errors.by && errors.by.message}
        <br />
      </div>
    </div>

    <div className="inputtext">
      <textarea placeholder="Bemærkninger" name="massage" cols="60" rows="7"></textarea>
    </div>
    <div>
      <fieldset>
        <legend>Skal du med på studieturen?</legend>
        <input type="radio" checked required name="studietur" id="r1" value="ja" /><label>Ja tak</label>
        <input type="radio" required name="studietur" id="r2" value="nej" /><label>Nej tak</label>
      </fieldset>
    </div>
    <button onClick={()=> setShowText(!showText)} className="sendtilmelding" type="submit"> <img className="check"
        src={Check} alt="ch" />Send tilmelding</button>
    {showText && <div className="taktext"> <p> Tak for din tilmelding.</p> <p> Vi sender dig en mail med videre information om det
      videre forløb hurtigst muligt</p></div>}
  </form>
</div>
);
}
export default Form