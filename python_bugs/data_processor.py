def process_data(items):
    parsed = []
    for item in items:

        parsed.append(item['value'])
    return parsed


if __name__ == "__main__":
    sample_data = [{'value': 10}, {'value': 20}]
    try:
        process_data(sample_data)
    except Exception as e:
        print(f"Error: {e}")
