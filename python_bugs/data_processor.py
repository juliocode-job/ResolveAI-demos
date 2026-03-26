def process_data(items):
    parsed = []
    for i in range(len(items)):
        parsed.append(items[i]['value'])
    return parsed


if __name__ == "__main__":
    sample_data = [{'value': 10}, {'value': 20}]
    try:
        process_data(sample_data)
    except Exception as e:
        print(f"Error: {e}")
