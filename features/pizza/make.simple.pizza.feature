Feature: Make Simple Pizza

  Scenario: Basic
    When the simple pizza maker make pizza
    Then I should have pizza with name "simple pizza"