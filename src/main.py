from typing import List, Dict

def find_faulty_devices(logs: List[Dict]) -> List[str]:
    """
    Identifies devices that experience three consecutive "error" statuses in the log.

    Args:
    logs (List[Dict]): A list of dictionaries representing log entries from IoT devices.

    Returns:
    List[str]: A list of device_ids flagged as faulty.
    """
    # Sort the logs by timestamp to ensure chronological order
    logs.sort(key=lambda log: log['timestamp'])

    # Initialize a dictionary to track consecutive errors for each device
    consecutive_errors = {}
    faulty_devices = set()

    # Process logs to track errors
    for log in logs:
        device_id = log['device_id']
        status = log['status']

        # If the device already flagged, skip further processing for it
        if device_id in faulty_devices:
            continue

        # Increment or reset the consecutive errors counter based on the status
        if status == "error":
            consecutive_errors[device_id] = consecutive_errors.get(device_id, 0) + 1
            # Flag device as faulty if it reaches three consecutive errors
            if consecutive_errors[device_id] >= 3:
                faulty_devices.add(device_id)
        else:
            # Reset counter for non-error status
            consecutive_errors[device_id] = 0

    # Return the list of faulty device IDs
    return list(faulty_devices)


# Test input to debug the function
if __name__ == "__main__":
    logs = [
    {'device_id': 'c1', 'status': 'ok', 'timestamp': '2023-01-01T00:00:00'},
    {'device_id': 'c1', 'status': 'error', 'timestamp': '2023-01-01T00:01:00'},
    {'device_id': 'c1', 'status': 'error', 'timestamp': '2023-01-01T00:02:00'},
    {'device_id': 'c1', 'status': 'error', 'timestamp': '2023-01-01T00:03:00'},
    {'device_id': 'c2', 'status': 'ok', 'timestamp': '2023-01-01T00:00:00'},
    {'device_id': 'c2', 'status': 'error', 'timestamp': '2023-01-01T00:01:00'},
    {'device_id': 'c2', 'status': 'ok', 'timestamp': '2023-01-01T00:02:00'},
    {'device_id': 'c2', 'status': 'error', 'timestamp': '2023-01-01T00:03:00'}
]
    print(find_faulty_devices(logs))    