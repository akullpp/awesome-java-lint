// Specific to awesome-java: Invalid words for a description of list items to start with.
const listItemDescriptionStartWordBlacklist = new Set(['the', 'a', 'an'])

module.exports = word => {
  if (listItemDescriptionStartWordBlacklist.has(word.toLowerCase())) {
    return `List item description is not allowed to start with ${word}`
  }
}
