Feature: Photo Gallery Feature

    Scenario: User takes, saves, and then delete the photo in the app
        Given the user is on the app
        When the user goes to the second tab Tab 2 Photo Gallery
        And take a photo by clicking the camera button
        And save the photo by clicking the accept button
        Then delete the saved photo by clicking the delete button