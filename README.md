# Multilingual Speech Recognition for Indonesian Languages

[*Speech Recognition Live Demo*](https://asr.ai-research.id)
## Introduction
Automatic Speech Recognition (ASR) enables the recognition and translation of spoken language into text. Typically 
the ASR Model is trained and used for a specific language. However, Indonesia has more than 
[700 spoken languages](https://en.wikipedia.org/wiki/Languages_of_Indonesia). 
It is not practicable to provide a speech recognition model for each language.

Therefore, we want to develop a multilingual speech recognition model that can  at least support some of 
the main Indonesian languages without sacrificing model performance for each language.

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
[Javanese](https://paperswithcode.com/sota/speech-recognition-on-openslr-high-quality) and 
[Sundanese](https://paperswithcode.com/sota/speech-recognition-on-openslr-high-quality-1) language.

We trained a multilingual Wav2vec 2.0 model with the three languages combined for 200 epochs. We also trained three 
Wav2vec 2.0 models with a single language for Indonesian, Java, and Sundanese, each for 200 epochs.

## Results and Comparison

We built a [multilingual Speech Recognition model](https://huggingface.co/indonesian-nlp/wav2vec2-indonesian-javanese-sundanese) 
and publish it as open source model. We also provide a [live demo](https://huggingface.co/spaces/indonesian-nlp/multilingual-asr) 
to test the model.

Following is the comparison of the models and the list of its performance evaluation:

### The Models Comparison
The following figure is the model comparison by Word Error Rate (WER) for the Test split of Indonesian Common Voice 6.1 
(less is better)

#### Without Language Model 
![ASR-Comparison](https://github.com/indonesian-nlp/multilingual-asr/raw/main/images/ASR-Comparison-2021.png "ASR-Comparison")

#### With Language Model 
Lastly, we integrated a language model into our speech recognition pipeline, which reduces the WER from 11.57% to 
**4.27%** on the Test split of Indonesian Common Voice 6.1.
We also evaluated the performance of [Google Speech To Text](https://cloud.google.com/speech-to-text), its WER 
for the Test split of Indonesian Common Voice 6.1 is **9.22%**.

![ASR-Comparison](https://github.com/indonesian-nlp/multilingual-asr/raw/main/images/ASR-Comparison-2022.png "ASR-Comparison")

### The detail of the performance evaluation
The performance evaluation can be found [here](https://github.com/indonesian-nlp/multilingual-asr/blob/main/evaluation.md)

## Conclusion
- The experiment shows that the multilingual model can perform on par with a model trained on a 
single language; the Word Error Rate (WER) difference is maximal 0.6 absolute percent. We also 
trained the multilingual model with more epochs, and it outperforms the monolingual model.
- The monolingual model performs very well in the language we trained for but poorly in other 
languages.
- The multilingual speech recognition model overcomes the need to have a separate model for each 
language in Indonesia. Therefore, it significantly reduces hardware resources and simplifies 
the model deployment.

## Future Works
We plan following for the future:
- Training the model with more data and more Indonesian languages.
- ~~Integrating Language Model to reduce the WER~~
- Compressing the model size for speeding up the inferencing time and reducing
hardware resources
- Developing real-time speech recognition based on this multilingual model.
