# Cheatsheet: Python Concurrency

### Threading (I/O Bound)
```python
import threading
import time

def io_task(name):
    time.sleep(1)
    print(f"Task {name} done")

# Create threads
threads = []
for i in range(5):
    t = threading.Thread(target=io_task, args=(i,))
    threads.append(t)
    t.start()

# Wait for all threads to finish
for t in threads:
    t.join()
```

### Multiprocessing (CPU Bound)
```python
import multiprocessing

def cpu_task(number):
    return number ** 2

if __name__ == '__main__':
    numbers = [1, 2, 3, 4, 5]
    
    # Use a Pool to map tasks to available CPU cores
    with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as pool:
        results = pool.map(cpu_task, numbers)
        
    print(results)
```

### Asyncio (High-Concurrency I/O)
```python
import asyncio

async def fetch_data(id):
    await asyncio.sleep(1)
    return {"id": id, "data": "..."}

async def main():
    # Run concurrently
    tasks = [fetch_data(i) for i in range(5)]
    results = await asyncio.gather(*tasks)
    print(results)

asyncio.run(main())
```
