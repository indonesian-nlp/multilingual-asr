from datasets import load_dataset, load_metric
from pathlib import Path
import re
import unidecode
from util.text_processor import TextProcessor

transcript_file = Path("transcription_google.tsv")
chars_to_ignore = [",", "?", ".", "!", "-", ";", ":", '""', "%", "'", '"', "�", "‘", "’", "’"]
chars_to_ignore_regex = f'[{"".join(chars_to_ignore)}]'
tp = TextProcessor()

def remove_special_characters(sentence):
    # word-internal apostrophes are marking contractions
    sentence = tp.normalize(sentence)
    sentence = re.sub(r'[‘’´`]', r"'", sentence)
    sentence = re.sub(r'è', r"é", sentence)
    sentence = re.sub(r"(-|' | '|  +)", " ", sentence)
    # most other punctuation is ignored
    sentence = re.sub(chars_to_ignore_regex, "", sentence).lower().strip()
    # remove accents from a few characters (from loanwords, not tones)
    sentence = unidecode.unidecode(sentence)
    return sentence

def main():
    id_test = load_dataset("common_voice", "id", split="test")
    wer = load_metric("wer")
    references = []
    predictions = []
    transcripts = {}
    with open(transcript_file, "r") as tsv_file:
        for i, line in enumerate(tsv_file):
            if i == 0:
                continue
            path, sentence = line.split("\t")
            transcripts[path] = sentence.strip()
    for row in id_test:
        references.append(remove_special_characters(row["sentence"].lower()))
        predictions.append(remove_special_characters(transcripts[row["path"].split("/")[-1]]))
        if references[-1] != predictions[-1]:
            print(f"Ref: {references[-1]}, Pred: {predictions[-1]}")
    WER = 100 * wer.compute(predictions=predictions, references=references)
    print(f"Google WER: {WER:.2f}")


if __name__ == "__main__":
    main()

