import { useEffect, useState } from 'react';
import './App.css'
import LoaderSpinner from './components/LoaderSpinner';

type JmbgData = {
  sex?: string;
  day?: string;
  month?: string;
  year?: string;
  place?: string;
}

export default function App() {
  const [data, setData] = useState<JmbgData | null>(null);
  const [jmbg, setJmbg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  useEffect(() => {
    setDisabledBtn(jmbg.length !== 13)
  }, [jmbg.length])

  function handleSubmitJmbg() {
    if (disabledBtn) return;
    setLoading(true);
    let place = "";
    const day = jmbg[0] + jmbg[1];
    const month = jmbg[2] + jmbg[3];
    const year = jmbg[4] === "9" ? 1 + jmbg[4] + jmbg[5] + jmbg[6] : 2 + jmbg[4] + jmbg[5] + jmbg[6];
    let placeNums = jmbg[7] + jmbg[8];
    if (Number(year) < 2014) {
      switch (placeNums) {
        case "10":
          place = "Banja Luka, Bosanska Gradiška, Čelinac, Jajce/Jezero, Jajce, Ključ/Ribnik, Ključ, Kotor-Varoš, Laktaši, Mrkonjić-Grad, Prnjavor, Dobretići, Skender-Vakuf/Kneževo, Srbac, Šipovo.";
          break;
        case "11":
          place = "Bihać, Bosanska Krupa, Bosanska Krupa/Krupa na Uni, Bosanski Petrovac, Bosanski Petrovac/Petrovac, Bosansko Grahovo/Grahovo, Cazin, Drvar/Srpski Drvar, Drvar, Velika Kladuša, Bužim.";
          break;
        case "12":
          place = "Doboj-Jug, Doboj-Istok, Doboj, Bosanski Brod, Bosanski Šamac, Domaljevac/Šamac, Derventa, Gračanica, Gračanica/Petrovo, Maglaj, Modriča, Odžak/Vukosavlje, Odžak, Teslić, Tešanj, Usora.";
          break;
        case "13":
          place = "Goražde, Novo Goražde, Čajniče, Foča, Rudo, Višegrad.";
          break;
        case "14":
          place = "Livno, Tomislavgrad, Glamoč.";
          break;
        case "15":
          place = "Mostar Centralni distrikt, Mostar Stari Grad, Mostar Sjever, Mostar Jugoistok, Mostar Jugozapad, Mostar Zapad, Mostar Jug, Mostar/Srpski Mostar, Bileća, Čapljina, Čitluk, Gacko, Grude, Jablanica, Konjic, Široki Brijeg, Ljubinje, Ljubuški, Neum, Nevesinje, Posušje, Prozor/Prozor-Rama, Stolac/Berkovići, Stolac, Ravno, Trebinje.";
          break;
        case "16":
          place = "Prijedor, Bosanska Dubica/Kozarska Dubica, Bosanski Novi, Sanski Most, Kostajnica.";
          break;
        case "17":
          place = "Sarajevo-Centar, Breza, Fojnica, Hadžići, Han-Pijesak, Ilidža (FBiH), Istocna Ilidža, Ilijaš, Kalinovik, Kiseljak, Kreševo, Sarajevo-Novi Grad, Novo Sarajevo, Istocno Novo Sarajevo, Olovo, Pale-RS, Pale-FBiH, Rogatica, Sokolac, Sarajevo-Stari Grad/Srpsko Sarajevo, Trnovo-RS, Trnovo-FBiH, Vareš, Visoko, Vogošća.";
          break;
        case "18":
          place = "Tuzla, Banovići, Bijeljina, Bratunac, Distrikt Zenica, Bugojno, Busovača, Donji Vakuf, Gornji Vakuf, Kakanj, Kupres, Kupres/Srpski Kupres, Novi Travnik, Travnik, Vitez, Zavidovići, ŽepčeBrčko, Gradačac, Gradačac/Pelagićevo, Kalesija, Kalesija/Osmaci, Kladanj, Lopare/Čelić, Lopare, Lukavac, Orašje, Orašje/Srpsko Orašje, Srebrenica, Srebrenik, Šekovići, Teočak, Ugljevik, Vlasenica, Sapna, Zvornik, Živinice, Milići.";
          break;
        case "19":
          place = "Zenica, Bugojno, Busovača, Donji Vakuf, Gornji Vakuf, Kakanj, Kupres, Novi Travnik, Travnik, Vitez, Zavidovići, Žepče.";
          break;
      }
    } else {
      switch (placeNums) {
        case "11":
          place = "Banja Luka, Čelinac, Gradiška, Istočni Drvar, Jezero, Kneževo, Kostajnica, Kotor Varoš, Kozarska Dubica, Krupa na Uni, Kupres, Laktaši, Mrkonjić Grad, Novi Grad, Oštra Luka, Petrovac, Prijedor, Prnjavor, Ribnik, Srbac i Šipovo.";
          break;
        case "12":
          place = "Bijeljina, Brod, Derventa, Doboj, Donji Žabar, Lopare, Modriča, Pelagićevo, Petrovo, Stanari, Teslić, Ugljevik, Vukosavlje i Šamac.";
          break;
        case "13":
          place = "Bileća, Berkovići, Bratunac, Čajniče, Foča, Gacko, Han Pijesak, Istočna Ilidža, Istočni Mostar, Istočni Stari Grad, Istočno Novo Sarajevo, Kalinovik, Ljubinje, Milići, Nevesinje, Novo Goražde, Osmaci, Pale, Rogatica, Rudo, Srebrenica, Sokolac, Šekovići, Trebinje, Trnovo, Višegrad, Vlasenica i Zvornik.";
          break;
        case "14":
          place = "Brčko Distrikt Bosne i Hercegovine,";
          break;
        case "15":
          place = "Čapljina, Čitluk, Grude, Jablanica, Konjic, Ljubuški, Mostar, Neum, Posušje, Prozor, Ravno, Stolac i Široki Brijeg.";
          break;
        case "16":
          place = "Bihać, Bosanska Krupa, Bosanski Petrovac, Bosansko Grahovo, Bužim, Cazin, Drvar, Glamoč, Ključ, Kupres, Livno, Sanski Most, Tomislavgrad i Velika Kladuša.";
          break;
        case "17":
          place = "Centar Sarajevo, Foča, Goražde, Hadžići, Ilidža, Ilijaš, Novo Sarajevo, Pale, Sarajevo Novi Grad, Sarajevo Stari Grad, Trnovo i Vogošća.";
          break;
        case "18":
          place = "Banovići, Čelić, Doboj-Istok, Domaljevac-Šamac, Gračanica, Gradačac, Kalesija, Kladanj, Lukavac, Odžak, Orašje, Sapna, Srebrenik, Teočak, Tuzla i Živinice.";
          break;
        case "19":
          place = "Bugojno, Breza, Busovača, Doboj-Jug, Dobretići, Donji Vakuf, Fojnica, Gornji Vakuf, Jajce, Kakanj, Kiseljak, Kreševo, Maglaj, Novi Travnik, Olovo, Travnik, Tešanj, Usora, Vareš, Visoko, Vitez, Zavidovići, Zenica i Žepče.";
          break;
      }
    }
    const sex = Number(jmbg[9] + jmbg[10] + jmbg[11]) < 500 ? "muško" : "žensko";

    const newData: JmbgData = {
      sex,
      day,
      month,
      year,
      place
    };

    setData(newData);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="container flex flex-col gap-3">
      <label className='text-gray-800' htmlFor="jmb">Unesi svoj JMB (jedinstveni matični broj):</label>
      <input
        onChange={(e) => setJmbg(e.target.value)}
        className='bg-white text-gray-900 h-14 px-4 rounded-full shadow-lg'
        type="number"
        name="jmb"
        id="jmb"
        minLength={13}
        autoFocus
        maxLength={13}
        required
      />
      <div
        onClick={handleSubmitJmbg}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out ${
          disabledBtn
            ? "bg-blue-700/20 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-600 cursor-pointer"
        }`}
        
      >OK</div>
      {loading && (
        <div className="flex justify-center">
          <LoaderSpinner />
        </div>
      )}
      {!loading && data && (
        <p className='flex flex-col gap-2'>
          <div>Spol: {data.sex}.</div>
          <div>Datum rođenja: {data.day}.{data.month}.{data.year}.</div>
          <div>Mjesto rođenja: {data.place}</div>
        </p>)}
    </div>
  )
}