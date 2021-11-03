# Multilingual Speech Recognition for Indonesian Languages

## Introduction
Automatic Speech Recognition (ASR) enables the recognition and translation of spoken language into text. Typically 
the ASR Model is trained and used for a specific language. However, Indonesia has more than 
[700 spoken languages](https://en.wikipedia.org/wiki/Languages_of_Indonesia). 
It is not practicable to provide a speech recognition model for each language.

Therefore, we want to develop a multilingual speech recognition model that can support the main Indonesian languages 
without sacrificing model performance for each language.

## Objectives
We want to develop and build a multilingual speech recognition model with the Indonesian, Javanese, and Sundanese 
datasets. The model should perform well in all these three languages. We also train monolingual models for 
comparison purposes.

## Methods
We used the following speech datasets for the training/finetuning:
- [Indonesian Common Voice](https://commonvoice.mozilla.org/)
- [High-quality TTS data for Javanese](https://openslr.org/41/)
- [High-quality TTS data for Sundanese](https://openslr.org/44/)

We used [Wav2vec 2.0](https://arxiv.org/abs/2006.11477), a framework for self-supervised learning of speech 
representations which is now state of the art on the [Librispeech benchmark](https://paperswithcode.com/sota/speech-recognition-on-librispeech-test-clean)
for noisy speech, for [Indonesia](https://paperswithcode.com/sota/speech-recognition-on-common-voice-indonesian), 
[Sundanese](https://paperswithcode.com/sota/speech-recognition-on-openslr-high-quality) and 
[Javanese](https://paperswithcode.com/sota/speech-recognition-on-openslr-high-quality-1) language.

We trained a multilingual Wav2vec 2.0 model with the three languages combined for 200 epochs. We also trained three 
Wav2vec 2.0 models with a single language for Indonesian, Java, and Sundanese, each for 200 epochs.

## Results and Comparison

Following is the comparison of the models and the list of its performance evaluation:

### The Models Comparison
![ASR-Comparison](https://github.com/indonesian-nlp/multilingual-asr/raw/main/images/ASR-Comparison.png "ASR-Comparison")

### The detail of the performance evaluation
| Model Name | Training Dataset | Training Split Name | KenLM | Epoch | Test Dataset | Test Split Name |  WER (%) |
|------------|---------|-------|-------|-------|-------|-------|-----|
| indonesian-nlp/wav2vec2-indonesian | Indonesian | train+valid+other | false | 200 | Indonesian | test | 12.20 |
| indonesian-nlp/wav2vec2-indonesian | Indonesian | train+valid+other | false | 200 | Javanese | test* | 78.06 |
| indonesian-nlp/wav2vec2-indonesian | Indonesian | train+valid+other | false | 200 | Sundanese | test* | 64.04 |
| indonesian-nlp/wav2vec2-javanese | Javanese | train* | false | 200 | Indonesian | test | 85.16 |
| indonesian-nlp/wav2vec2-javanese | Javanese | train* | false | 200 | Javanese | test* | 16.92 |
| indonesian-nlp/wav2vec2-javanese | Javanese | train* | false | 200 | Sundanese | test* | 69.26 |
| indonesian-nlp/wav2vec2-sundanese | Sundanese | train* | false | 200 | Indonesian | test | 78.03 |
| indonesian-nlp/wav2vec2-sundanese | Sundanese | train* | false | 200 | Javanese | test* | 81.04 |
| indonesian-nlp/wav2vec2-sundanese | Sundanese | train* | false | 200 | Sundanese | test* | 6.74 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 200 | Indonesian | test | 12.38 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 200 | Javanese | test* | 17.52 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 200 | Sundanese | test* | 7.34 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 300 | Indonesian | test | 11.57 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 300 | Javanese | test* | 16.57 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | Indonesian+Javanese+Sundanese | train+valid+other, train*, train* | false | 300 | Sundanese | test* | 6.72 |
|            |         |       |     |
