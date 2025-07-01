# LLM Integration Process

Generic principles for using LLMs effectively with technical documentation and development workflows.

## See also

- `documentation/processes/UPDATE_HOUSEKEEPING_DOCUMENTATION.md` - Keeping documentation current
- `documentation/processes/WRITE_EVERGREEN_DOC.md` - Writing maintainable documentation
- `documentation/reference/LLM_API_IMPLEMENTATION.md` - Project-specific LLM integration example

## Core Principles

### 1. Documentation as LLM Context

**Principle**: Structure technical documentation to serve both human developers and LLM assistance.

**Key Characteristics:**
- **Clear examples** - Include realistic request/response examples for APIs
- **Consistent patterns** - Use standardized formats across similar documentation
- **Complete context** - Provide enough information for LLMs to understand the full picture
- **Error documentation** - Include error cases and handling patterns

### 2. Context File Hierarchy

**Principle**: Provide LLMs with context in logical order from general to specific.

**Recommended Order:**
1. **System overview** - High-level architecture and patterns
2. **API/Interface documentation** - Current endpoints, schemas, examples  
3. **Implementation details** - Code patterns, client libraries, utilities
4. **Domain-specific context** - Feature-specific documentation as needed

### 3. Prompt Engineering for Development

**Principle**: Use structured prompts that reference your documentation system.

**Template Structure:**
```
I'm working on [SPECIFIC_TASK] using our [SYSTEM_TYPE].

Current documentation is attached covering:
- [LIST_CONTEXT_FILES]

Please help me [SPECIFIC_REQUEST] following our established patterns.
```

### 4. Validation Workflow

**Principle**: Always validate LLM suggestions against your current documentation and standards.

**Validation Steps:**
1. **Check currency** - Ensure LLM is using latest documentation
2. **Verify patterns** - Confirm suggestions follow established conventions  
3. **Test integration** - Run tests/builds to verify implementation
4. **Update documentation** - Document new patterns that emerge

## Implementation Guidelines

### Documentation Structure for LLM Consumption

**Machine-readable formats** (when possible):
- OpenAPI specifications for APIs
- JSON schemas for data structures  
- Structured markdown with consistent headings

**Human-readable formats** (always):
- Clear examples with realistic data
- Error case documentation
- Cross-references between related concepts

### Maintaining LLM-Friendly Documentation

**When updating technical documentation:**
1. **Include examples** - Add realistic usage examples
2. **Document errors** - Include common error cases and solutions
3. **Show patterns** - Demonstrate consistent usage patterns
4. **Cross-reference** - Link to related documentation

**When adding new features:**
1. **Update schemas** - Modify formal specifications first
2. **Regenerate docs** - Use automated documentation generation when available
3. **Test LLM integration** - Verify LLMs can understand new patterns
4. **Document patterns** - Add new usage patterns to guides

### Common Integration Patterns

**API Development:**
- Generate formal specifications from code (OpenAPI, JSON Schema)
- Include realistic request/response examples
- Document authentication and error handling patterns
- Provide client library usage examples

**Frontend Development:**
- Document component patterns and usage
- Include state management examples
- Show integration patterns with backend APIs
- Document testing approaches

**Error Handling:**
- Document common error scenarios
- Provide debugging guides
- Include troubleshooting patterns
- Show error recovery examples

## Troubleshooting LLM Integration

**LLM suggests outdated patterns:**
- Check if documentation is current
- Regenerate automated documentation
- Update context files provided to LLM

**LLM misunderstands requirements:**
- Provide more specific context files
- Use more detailed prompts
- Include relevant examples in documentation

**LLM suggests non-standard patterns:**
- Verify LLM has access to style guides
- Check if patterns are documented in standards
- Update documentation with preferred approaches

## Benefits of This Approach

1. **Consistency** - LLMs follow documented patterns
2. **Quality** - Validation against current standards
3. **Maintainability** - Documentation serves multiple purposes
4. **Efficiency** - Reduced context switching between human and LLM development
5. **Knowledge preservation** - Patterns are documented for future reference