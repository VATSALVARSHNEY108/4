# Exercises: Python Concurrency

## Exercise 1: I/O Bound Threading
**Problem:** Write a Python script using the `threading` module to simulate downloading 5 different datasets (represented by `time.sleep()`). Compare the execution time of running them sequentially vs. using threads.

## Exercise 2: CPU Bound Multiprocessing
**Problem:** Write a Python function that calculates the factorial of a large number (e.g., 50000). Use the `multiprocessing` module to calculate the factorials of a list of 10 large numbers. Compare the time taken against a sequential loop.

## Exercise 3: The PyTorch DataLoader (Conceptual)
**Problem:** Write a pseudo-code implementation of a PyTorch Dataset and DataLoader. Explain in comments exactly what happens when `num_workers=4` is set on the DataLoader. How does it interact with the GIL?
