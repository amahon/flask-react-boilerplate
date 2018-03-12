"""Tests for app.py
"""
import unittest
import json

import app

class AppTestCase(unittest.TestCase):
    """Test Cases for app.py

    """
    def setUp(self):
        """setUp Test Environment
        """
        app.app.testing = True
        self.app = app.app.test_client()

    def tearDown(self):
        """tearDown Test Environment
        """
        pass

    def test_home(self):
        """Test Home request
        """
        response_raw = self.app.get('/api/home')
        response_data = json.loads(
            response_raw.get_data(as_text=True)
        )
        assert 'message' in response_data
        assert response_data['message'] == "Hello from the Server!"
s
