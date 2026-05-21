# Interview Questions: Python Concurrency

1. **What is the Global Interpreter Lock (GIL) and why does it exist in Python?**
   *Expected Answer:* The GIL is a lock that allows only one thread to execute Python bytecode at a time. It exists to protect CPython's memory management (reference counting) from race conditions.

2. **If you have a task that requires heavy image augmentation before feeding to a neural network, should you use `threading` or `multiprocessing`? Why?**
   *Expected Answer:* `multiprocessing`. Image augmentation is a CPU-bound task. Threading would be bottlenecked by the GIL, resulting in no performance gain. Multiprocessing bypasses the GIL by creating separate processes.

3. **What is the difference between concurrency and parallelism?**
   *Expected Answer:* Concurrency is about dealing with lots of things at once (task switching, like async or threading on a single core). Parallelism is about doing lots of things at once (like multiprocessing on multiple CPU cores).

4. **How do you share data between different processes in Python's `multiprocessing` module?**
   *Expected Answer:* Because processes have separate memory spaces, you must use inter-process communication (IPC) tools provided by the module, such as `Queue`, `Pipe`, `Value`, or `Array`.

5. **Explain `num_workers` in PyTorch's DataLoader.**
   *Expected Answer:* `num_workers` defines how many subprocesses to use for data loading. It utilizes Python's multiprocessing to fetch and augment data in parallel, preventing the GPU from starving for data.
