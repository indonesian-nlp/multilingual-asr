# Multilingual Speech Recognition for Indonesian Languages


## Results and Comparison

| Model Name | Training Dataset | Training Split Name | KenLM | Epoch | Test Dataset | Test Split Name |  WER (%) |
|------------|---------|-------|-------|-------|-------|-------|-----|
| indonesian-nlp/wav2vec2-indonesian | common_voice/lg | train+valid+other | false | 200 | common_voice/id | test | 12.20 |
| indonesian-nlp/wav2vec2-javanese | openslr/SLR41 | train* | false | 200 | openslr/SLR41 | test* | 16.92 |
| indonesian-nlp/wav2vec2-sundanese | openslr/SLR44 | train* | false | 200 | openslr/SLR44 | test* | 6.74 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 200 | common_voice/id | test | 12.38 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 200 | openslr/SLR41 | test* | 17.52 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 200 | openslr/SLR44 | test* | 7.34 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 300 | common_voice/id | test | 11.57 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 300 | openslr/SLR41 | test* | 16.57 |
| indonesian-nlp/wav2vec2-indonesian-javanese-sundanese | common_voice/id, openslr/SLR41, openslr/SLR44 | train+valid+other, train*, train* | false | 300 | openslr/SLR44 | test* | 6.72 |
|            |         |       |     |
