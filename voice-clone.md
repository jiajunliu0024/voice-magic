Using Gradio 

Part 1: Training voice, provide a sample of voice in mp3

Part 2: Use the video-voice app

Code location: ssh ubuntu@158-101-120-201 ~/scratch/anderson/GPT-SoVITS-fast-inference

Part 1. voice.yepai.com.au/training

Preliminary Dataset Acquisition Tools

This section provides tools for preliminary tasks like voice separation, audio slicing, denoising, and speech recognition.

0a. UVR5 Vocal Accompaniment Separation & De-reverberation Tool (voice.yepai.com.au/uvr5)

Enable UVR5-WebUI: Check this box to enable the UVR5 web user interface. This tool is useful for separating vocal tracks from accompaniment and reducing reverberation in audio files.

UVR5 Process Output Information: Displays the status and output information from the UVR5 processing module.

0b. Audio Slicing Tool

Input Path: Specify the directory or file path for the audio to be sliced.

Output Root Directory: Define the root directory where the sliced audio segments will be stored.

Threshold to Silence: Set the volume level below which audio is considered silent and used as a potential slicing point.

Minimum Length of Each Segment: Set the minimum duration for each audio segment. If a segment is too short, it will be merged with the next one until this minimum is met.

Minimum Interval: Define the minimum interval between cuts to avoid excessive slicing.

Hop Size: Adjust how the volume curve is calculated; smaller values increase precision and computational load.

Maximum Silence Kept: Maximum length of silence to retain at the start or end of a segment.

Normalization Maximum: The peak value for normalization of the audio.

Alpha Mix: The mix ratio of normalized audio used in processing.

Number of Processes: Choose how many parallel processes to use for slicing.

Audio Slicing Process Output Information: View the real-time status and results of the audio slicing process.

0c. Batch Offline ASR Tool

Input Folder Path: Directory containing audio files for speech recognition.

Output Folder Path: Directory to save the ASR output text files.

ASR Model and Size: Select the ASR model and its size. Different models may support different languages.

ASR Language: Choose the language for the ASR process.

ASR Process Output Information: Displays output and status from the ASR module.

0d. Audio-Text Proofing and Labelling Tool (voice.yepai.com.au/subfix)

Enable Labelling Tool: Check to activate the web UI for audio-text proofing and labelling.

Path to .list File: Path to the .list file used for labelling.

Labelling Tool Process Output Information: Shows information on the status of the labelling tool process.

GPT-SoVITS-TTS

This section is focused on training and inference for the GPT-SoVITS model, specifically for TTS (Text-to-Speech).

1A. Dataset Formatting Tools

Text Annotation File: Path to the file containing text annotations linked with audio files.

Audio File Directory: Directory where the training audio files are stored.

Text Content (1Aa), SSL Feature Extraction (1Ab), Semantic Token Extraction (1Ac): Set up processes for preparing text, extracting features using SSL models, and extracting semantic tokens from audio.

One-Click Setup (1Aabc): Executes the text processing, SSL feature extraction, and semantic token extraction sequentially.

Process Output Information: View output and status for each sub-process within dataset formatting.

1B. Fine-Tuning Training

SoVITS Training (1Ba) and GPT Training (1Bb): Configure and initiate training for SoVITS and GPT models. Settings include batch size, total epochs, learning rates, and GPU allocation.

Training Process Output Information: Monitors and displays progress and outputs from the training processes.

1C. Inference (voice.yepai.com.au/inference)

Model Selection: Choose pre-trained models for GPT and SoVITS from dropdown lists. Refresh the model paths if new models are added.

Enable TTS Inference WebUI: Toggle to activate the web UI for real-time TTS inference.

Inference Process Output Information: Displays information about the TTS inference process.

Part 2: Video Processing and Audio-Video Musing Application (Gradio )

Step 1: Upload Video and Extract Audio

Upload Video: The file picker selects a video file from your local storage.

Extract Audio: After uploading the video, click on "Select and Extract Audio" to extract audio from the video. The extracted audio will be displayed for playback and its path will be displayed in the text box.

Step 2: Generate and Save Subtitles

Generate Subtitles: Click on "Generate Subtitles" to create subtitles for the uploaded audio. The generated subtitles will appear in the textbox.

Save Generated Subtitles: To save the generated subtitles for later on, enter a path in the "Path to save Generated SRT" box and click "Save Generated SRT". E.G. “generated.srt”

Step 3: Correct and Translate Subtitles

Correct Subtitles: Enter your OpenAI API key and click "Correct Subtitles" to correct the subtitles. The corrected subtitles will be displayed in the textbox.

Translate Subtitles: Select the target language from the dropdown and click "Translate Subtitles" to translate the corrected subtitles. The translated subtitles will appear in the textbox.

Save Translated Subtitles: Enter a path to save the translated subtitles and click "Save Translated SRT". E.G. “translated.srt”

Step 4: Generate Audio for Translated Subtitles

Generate Audio: After translating the subtitles, enter details for the reference audio, prompt text, and prompt language. Select the GPT and SoVITS model paths using the dropdowns. Adjust settings like fragment interval and speed factor as desired.

Generate All Audio Segments: This button generates audio segments for each subtitle. The generated segments will be displayed on the page, and each can be listened to individually.

Step 5: Regenerate Specific Audio Segments

Edit and Regenerate: If you need to edit and regenerate a specific audio segment, use the dropdown to select the segment, modify the text in the textbox, and click "Regenerate Segment".

Step 6: Generate Translated Video

Generate Translated Video: After generating and saving all audio segments, enter the output video path (must end in .mp4) and click "Generate Translated Video". The muxed video with the new audio and subtitles will be displayed for playback.

General Tips

Progress Tracking: The application provides progress feedback for each step to help you understand the current operation and its completion status.

Error Handling: In case of errors during any process, the application will display error messages to guide you on potential issues. Or check the terminal using “nohup”
