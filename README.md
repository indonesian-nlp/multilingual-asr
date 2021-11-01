# Multilingual Speech Recognition for Indonesian Languages


## Results and Comparison

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

![ASR-Comparison](https://github.com/indonesian-nlp/multilingual-asr/blob/master/images/ASR-Comparison.png "ASR-Comparison")