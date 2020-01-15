// > tsc --watch index.ts
// ---------- ENUMS ----------
// Enums are number based in TS
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
// Same as
myFeeling = 1;
