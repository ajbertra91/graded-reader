---
feature: the app uses proper routing with dynamic routes, so pages can be linked to
---

# acceptance criteria

scenario: reader route
  given: the user is on the site
  when: the user clicks on the "reader" link
  then: the the app navigates to the /reader/level/1 route

  given: the user is on reader level route not /level/2
  when: the user clicks on the "2" link
  then: the app navigates to the /readder/level/2 route

  given: the user is on reader level route not /level/3
  when: the user clicks on the "3" link
  then: the app navigates to the /readder/level/3 route

  given: the user is on reader level route not /level/4
  when: the user clicks on the "4" link
  then: the app navigates to the /readder/level/4 route

  given: the user is on reader level route not /level/5
  when: the user clicks on the "5" link
  then: the app navigates to the /readder/level/5 route

scenario: news route
  given: the user is on the site
  when: the user clicks on the "news" link
  then: the the app navigates to the /news/level/1 route

  given: the user is on news level route not /level/2
  when: the user clicks on the "2" link
  then: the app navigates to the /readder/level/2 route

  given: the user is on news level route not /level/3
  when: the user clicks on the "3" link
  then: the app navigates to the /readder/level/3 route

  given: the user is on news level route not /level/4
  when: the user clicks on the "4" link
  then: the app navigates to the /readder/level/4 route

  given: the user is on news level route not /level/5
  when: the user clicks on the "5" link
  then: the app navigates to the /readder/level/5 route

scenario: church route
  given: the user is on the site
  when: the user clicks on the "church" link
  then: the the app navigates to the /church/level/1 route

  given: the user is on church level route not /level/2
  when: the user clicks on the "2" link
  then: the app navigates to the /readder/level/2 route

  given: the user is on church level route not /level/3
  when: the user clicks on the "3" link
  then: the app navigates to the /readder/level/3 route

  given: the user is on church level route not /level/4
  when: the user clicks on the "4" link
  then: the app navigates to the /readder/level/4 route

  given: the user is on church level route not /level/5
  when: the user clicks on the "5" link
  then: the app navigates to the /readder/level/5 route

scenario: vocabulary route
  given: the user is on the site
  when: the user clicks on the "vocabulary" link
  then: the the app navigates to the /vocabulary/level/1 route

  given: the user is on vocabulary level route not /level/2
  when: the user clicks on the "2" link
  then: the app navigates to the /readder/level/2 route

  given: the user is on vocabulary level route not /level/3
  when: the user clicks on the "3" link
  then: the app navigates to the /readder/level/3 route

  given: the user is on vocabulary level route not /level/4
  when: the user clicks on the "4" link
  then: the app navigates to the /readder/level/4 route

  given: the user is on vocabulary level route not /level/5
  when: the user clicks on the "5" link
  then: the app navigates to the /readder/level/5 route
