# coding=utf-8
# Copyright 2021 The HuggingFace Datasets Authors and the current dataset script contributor.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
""" OpenSLR Dataset"""

from __future__ import absolute_import, division, print_function

import os
import re
from pathlib import Path

import datasets
from datasets.tasks import AutomaticSpeechRecognition


_DATA_URL = "https://magichub.com/"

_CITATION = """\
"""

_DESCRIPTION = """\
MagicData dataset
"""

_HOMEPAGE = "https://magichub.com/"

_LICENSE = ""

_LANGUAGES = {
    "id": {
        "Language": "Indonesian",
        "Description": "Magic Data dataset for Indonesian",
        "Date": "2021",
    },
    "tr": {
        "Language": "Turkish",
        "Description": "Magic Data dataset for Turkish",
        "Date": "2021",
    }
}


class MagicDataConversationConfig(datasets.BuilderConfig):
    """BuilderConfig for MagicDataConversation."""

    def __init__(self, name, **kwargs):
        """
        Args:
          data_dir: `string`, the path to the folder containing the files in the
            downloaded .tar
          citation: `string`, citation for the data set
          url: `string`, url for information about the data set
          **kwargs: keyword arguments forwarded to super.
        """
        self.language = kwargs.pop("language", None)
        self.description = kwargs.pop("description", None)
        self.date = kwargs.pop("date", None)
        super(MagicDataConversationConfig, self).__init__(name=name, **kwargs)


class MagicDataConversation(datasets.GeneratorBasedBuilder):
    VERSION = datasets.Version("1.0.0")
    BUILDER_CONFIGS = [
        MagicDataConversationConfig(
            name=lang_id,
            language=_LANGUAGES[lang_id]["Language"],
            description=_LANGUAGES[lang_id]["Description"],
            date=_LANGUAGES[lang_id]["Date"],
        )
        for lang_id in _LANGUAGES.keys()
    ]

    def _info(self):
        features = datasets.Features(
            {
                "path": datasets.Value("string"),
                "start_time": datasets.Value("string"),
                "stop_time": datasets.Value("string"),
                "sentence": datasets.Value("string"),
                "speaker_id": datasets.Value("string"),
                "gender": datasets.Value("string"),
            }
        )

        return datasets.DatasetInfo(
            description=_DESCRIPTION,
            features=features,
            supervised_keys=None,
            homepage=_HOMEPAGE,
            license=_LICENSE,
            citation=_CITATION,
            task_templates=[
                AutomaticSpeechRecognition(audio_file_path_column="path", transcription_column="sentence")
            ],
        )

    def _split_generators(self, dl_manager):
        """Returns SplitGenerators."""
        data_dir = os.path.abspath(os.path.expanduser(dl_manager.manual_dir))
        if not os.path.exists(data_dir):
            raise FileNotFoundError(
                "{} does not exist. Make sure you insert a manual dir via `datasets.load_dataset('id_liputan6', "
                "'canonical', data_dir=...)`. Manual download instructions:\n{}".format(
                    data_dir, self.manual_download_instructions
                )
            )
        split_generators = [
            datasets.SplitGenerator(
                name=datasets.Split.TRAIN,
                gen_kwargs={
                    "path_to_index": os.path.join(data_dir, f"{data_dir}/TXT"),
                    "path_to_data": os.path.join(data_dir, f"{data_dir}/WAV"),
                    "split": "train"
                },
            ),
        ]
        return split_generators

    def _generate_examples(self, path_to_index, path_to_data, split):
        """Yields examples."""
        counter = -1
        if self.config.name in ["id", "tr"]:
            sentence_index = {}
            for path_to_textfile in sorted(Path(path_to_index).rglob("*.txt")):
                filename = path_to_textfile.stem
                sentence_index[filename] = []
                with open(path_to_textfile, encoding="utf-8") as f:
                    lines = f.readlines()
                    for id_, line in enumerate(lines):
                        field_values = re.split(r"\t", line.strip())
                        start_stop, speaker_id, gender, transcription = field_values
                        if speaker_id == "0":
                            continue
                        start_time, stop_time = start_stop[1:-1].split(',')
                        sentence_index[filename].append([start_time, stop_time, transcription, speaker_id, gender])
            for path_to_soundfile in sorted(Path(path_to_data).rglob("*.wav")):
                filename = path_to_soundfile.stem
                if filename not in sentence_index:
                    continue
                path = str(path_to_soundfile.resolve())
                for transcriptions in sentence_index[filename]:
                    counter += 1
                    yield counter, {
                        "path": path,
                        "start_time": transcriptions[0],
                        "stop_time": transcriptions[1],
                        "sentence": transcriptions[2],
                        "speaker_id": transcriptions[3],
                        "gender": transcriptions[4]
                    }
        else:
            pass
