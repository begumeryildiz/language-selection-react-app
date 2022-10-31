import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import data from "./data/languages_all.json";


function MultilanguageDirection() {
    const [language, setLanguage] = useState("default");
    const [direction, setDirection] = useState("");
    const [buttonText, setButtonText] = useState("");

    const languages = data["textSoftware"]
        .filter(element => element["text_id"] === "direction")[0]["item"]
        .map(element => element.lang)

    const wordMap = new Map(data["textSoftware"].map(
        (value) => {
            const textId = value["text_id"];
            const choices = new Map(value["item"].map((obj) => [obj.lang, obj.text]));
            return [textId, choices];
        }
    ));

    const languageNameMap = wordMap.get("nameOfLanguage")
    const directionMap = wordMap.get("direction")

    const selectLanguage = () => {
        const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
        setLanguage(randomLanguage);
    };

    useEffect(() => {
        let buttonText = language;
        if (languageNameMap.has(language)) {
            buttonText += " / " + languageNameMap.get(language);
        }
        setButtonText(buttonText);
        setDirection(directionMap.get(language));
    }, [language]);

    function handleClick() {
        selectLanguage();
    };

    return (
        <div>
            <Button className="btn-rounded fw-bold px-4 py-4" variant="success" onClick={handleClick}>{buttonText}</Button>
            <span className="fw-bold " style={{ textTransform: "capitalize", fontSize: "36px" }}> {direction}</span>
        </div>
    );
}

export default MultilanguageDirection;