# Topic Notes: Python Concurrency & Multiprocessing

## Core Concepts
Concurrency in Python allows multiple tasks to run during overlapping time periods. This is critical in AI and ML workloads where the CPU must constantly load, augment, and feed data to the GPU without bottlenecking the training process.

### 1. The Global Interpreter Lock (GIL)
- A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.
- **Impact:** Python threading is essentially useless for CPU-bound tasks (like matrix multiplication or image processing) because only one thread can execute at a time.
- **Solution:** Use `multiprocessing` for CPU-bound tasks, which bypasses the GIL by creating entirely separate memory spaces and Python interpreter instances.

### 2. Threading
- **Use Case:** I/O-bound tasks.
- **Examples:** Downloading datasets, making API calls to LLMs (like OpenAI's API), reading small files.
- **Memory:** Shared memory space. Lightweight to start.

### 3. Multiprocessing
- **Use Case:** CPU-bound tasks.
- **Examples:** Image augmentation, tokenizing massive text datasets, parallel mathematical computations.
- **Memory:** Separate memory spaces. Heavier to start. Requires inter-process communication (IPC) to share data (e.g., Queues, Pipes).

### 4. Asyncio (async/await)
- **Use Case:** High-concurrency I/O-bound tasks.
- **Examples:** Running thousands of concurrent web sockets or API requests.
- **Mechanism:** Single-threaded, cooperative multitasking using an event loop.

## Relevance to AI/ML
When using PyTorch's `DataLoader`, setting `num_workers > 0` utilizes the `multiprocessing` module under the hood. It spawns multiple processes to load and augment batches of data in parallel, ensuring the GPU never sits idle waiting for the CPU.
