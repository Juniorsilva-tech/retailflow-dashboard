print('start_check')
try:
    import playwright
    print('playwright:ok')
except Exception as e:
    print('playwright:fail:' + repr(e))
try:
    import requests
    print('requests:ok')
except Exception as e:
    print('requests:fail:' + repr(e))
print('end_check')
