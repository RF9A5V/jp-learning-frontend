import { useEffect, useState } from "react";
import { getPracticeKanji } from "../utils/APIClient";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { Kanji } from "../types";

export default function SingleGroup() {

  const { id } = useParams();

  const [kanji, setKanji] = useState({} as Kanji);

  useEffect(() => {
    const loadKanji = async () => {
      if(typeof id === "string" || typeof id === "number") {
        const kanji = await getPracticeKanji(id);
        setKanji(kanji);
      }
    }

    loadKanji();
  }, [])


  return (
    <Page>
      <div>
        <h1>{ kanji.character }</h1>
      </div>
    </Page>
  )
}