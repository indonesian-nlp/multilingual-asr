#!/usr/bin/env bash

export WANDB_ENTITY="cahya"
export WANDB_PROJECT="wav2vec2-multilang-asr"
export WANDB_LOG_MODEL="true"

python run_finetuning.py jv_su.json


