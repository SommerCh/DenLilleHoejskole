import React from 'react';
import '../style/kortekurser.css';
import Check from '../img/check.png'
const KorteKurser = () => {
return (
<div className="kortekurser">
    <h1>KORTE KURSER PÅ DEN LILLE HØJSKOLE.</h1>

    <p>
        Velkommen til alle. Vi glæder os meget til at møde både nye kursister og gamle kendinge.
        Højskolen er kendt for at have højt til loftet og plads til begejstring.
        Vi er desuden kendte for at have en god og varm omgangstone med respekt for det enkelte menneske.
        I hjemlige og hyggelige rammer vil du få input af forskellig karakter, så du på bare en
        enkelt uge vil være i stand til at flytte dig både fagligt og socialt.</p>

    <table>
        <tr>
            <th>TITEL</th>
            <th>START</th>
            <th>SLUT</th>
            <th>PRIS</th>
            <th>TILMELDING</th>
        </tr>
        <tr>
            <td>Dansk filmhistorie</td>
            <td>17/11/19</td>
            <td>22/11/19</td>
            <td>4075,-</td>
            <td><button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit"> <img
                        className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>

        <tr>
            <td>Havkajak</td>
            <td>08/07/19</td>
            <td>14/07/19</td>
            <td>4695,-</td>
            <td> <button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit">
                    <img className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>

        <tr>
            <td>Jagttegn og natur</td>
            <td>07/04/19</td>
            <td>13/04/19</td>
            <td>4495,-</td>
            <td><button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit"> <img
                        className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>
        <tr>
            <td>Krimi, virkelighed og fiction</td>
            <td>09/06/19</td>
            <td>13/06/19</td>
            <td>4295,-</td>
            <td> <button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit">
                    <img className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>
        <tr>
            <td>Ølbrygning</td>
            <td>21/06/19</td>
            <td>23/06/19</td>
            <td>4525,-</td>
            <td><button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit"> <img
                        className="check" src={Check} alt="dk" />Tilmeld dig
                    her</button></td>
        </tr>
        <tr>
            <td>Mad på dansk</td>
            <td>10/07/19</td>
            <td>15/07/19</td>
            <td>5500,-</td>
            <td> <button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit">
                    <img className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>
        <tr>
            <td>Kor, sang og musik</td>
            <td>19/07/19</td>
            <td>25/07/19</td>
            <td>3790,-</td>
            <td> <button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit">
                    <img className="check" src={Check} alt="dh" />Tilmeld dig
                    her</button></td>
        </tr>
        <tr>
            <td>Wellness og Yoga</td>
            <td>25/08/19</td>
            <td>29/08/19</td>
            <td>4875,-</td>
            <td> <button onClick={event=> window.location.href='/tilmelding'} className="tilmeldkort" type="submit">
                    <img className="check" src={Check} alt="ch" />Tilmeld dig
                    her</button></td>
        </tr>
    </table>

</div>
);
}

export default KorteKurser;