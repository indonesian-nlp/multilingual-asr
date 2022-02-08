from datasets import load_dataset
from pathlib import Path
import torchaudio
from tqdm import tqdm


output_dir = Path("/Users/cahya/Work/Machine Learning/data/ASR/indonesian/Indonesian_Conversational_Speech_Corpus_Split")
md = load_dataset("../datasets/magic_data_conversation", "id",
                  data_dir="/Users/cahya/Work/Machine Learning/data/ASR/indonesian/Indonesian_Conversational_Speech_Corpus")
last_audiofile = None
audio_array = None
samplerate = 16000

output_dir.mkdir(exist_ok=True)
(output_dir/"WAV").mkdir(exist_ok=True)
counter = 0
with open(f"{output_dir/'UTTRANSINFO.txt'}", "w") as f:
    f.write("CHANNEL\tUTTRANS_ID\tSPEAKER_ID\tPROMPT\tTRANSCRIPTION\n")
    for data in tqdm(md["train"], total=len(md['train'])):
        wav_dir = output_dir/f"WAV/{data['speaker_id']}"
        wav_dir.mkdir(exist_ok=True)
        filename = data["path"].split("/")[-1][:-4]
        if data['path'] != last_audiofile:
            audio_array, samplerate = torchaudio.load(data['path'])
        start_time, stop_time =  float(data['start_time']), float(data['stop_time'])
        audio_array_copy = audio_array[:, int(start_time*samplerate):int(stop_time*samplerate)]
        wav_file = wav_dir/f"{filename}_{counter:03}.wav"
        f.write(f"0\t{wav_file.name}\t{data['speaker_id']}\t\t{data['sentence']}\n")
        torchaudio.save(f"{wav_file}", audio_array_copy, 16000)
        last_audiofile = data['path']
        counter += 1

