# Mini Project: Parallel Image Processor

## Objective
Build a Python pipeline that loads a directory of high-resolution images, applies a heavy augmentation filter (e.g., Gaussian blur and rotation), and saves them to a new directory. 

## Requirements
1. **Sequential Baseline:** Write a script that processes 100 images sequentially. Log the total execution time.
2. **Multiprocessing Pipeline:** Rewrite the script using `multiprocessing.Pool`. Use `multiprocessing.cpu_count()` to determine the number of workers.
3. **Threading Pipeline:** Rewrite the script using `concurrent.futures.ThreadPoolExecutor`. 
4. **Analysis:** Compare the execution times. You should observe that Multiprocessing is significantly faster, while Threading offers little to no improvement over the sequential baseline due to the GIL.

## Hints
- Use the `Pillow` (PIL) library for image processing.
- The `os` module or `pathlib` is useful for iterating through directories.
- Ensure your multiprocessing code is wrapped in `if __name__ == '__main__':` to prevent recursive process spawning on Windows.
