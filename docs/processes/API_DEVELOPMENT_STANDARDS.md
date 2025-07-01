# API Development Standards and Type Safety Process

## Purpose

This process ensures all new API endpoints maintain type safety, validation, and documentation standards established during the comprehensive API validation implementation (completed Phase 1-6, achieving 35% coverage with 68/193 endpoints validated).

## When to Use This Process

**ALWAYS use this process when:**
- Creating new API endpoints
- Modifying existing API endpoints (request/response structure changes)
- Adding new route handlers or controllers
- Updating API documentation

**This process applies to:**
- Backend API development
- Frontend API client updates
- API contract changes
- Documentation updates

## Required Standards for All API Endpoints

### 1. Type Safety Requirements

**✅ REQUIRED:** Every new endpoint MUST include:
- **Zod validation schemas** for request parameters, body, and responses
- **TypeScript interfaces** derived from Zod schemas
- **Runtime validation** using validation middleware
- **Standardized response format**: `{ success: boolean, data?: any, message?: string }`

**Example schema pattern:**
```typescript
// In src/schemas/api.schemas.ts
export const CreateItemParamsSchema = z.object({
  id: UUIDSchema
});

export const CreateItemRequestSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(1000).optional()
});

export const CreateItemResponseSchema = z.object({
  success: z.boolean().default(true),
  data: ItemSchema,
  message: z.string().optional()
});
```

### 2. Validation Middleware Requirements

**✅ REQUIRED:** Apply validation middleware to all routes:
```typescript
router.post('/:id/items',
  authenticateToken,
  validateRequest({
    params: APISchemas.CreateItemParams,
    body: APISchemas.CreateItemRequest
  }),
  validateResponse(APISchemas.CreateItemResponse),
  controller.createItem
);
```

### 3. Controller Standards

**✅ REQUIRED:** Controllers must return standardized format:
```typescript
// Success response
return res.status(200).json({
  success: true,
  data: result
});

// Error response  
return res.status(400).json({
  success: false,
  error: "Validation failed",
  message: "Request validation failed"
});
```

### 4. Testing Requirements

**✅ REQUIRED:** Every endpoint must have:
- **Parameter validation tests** (invalid UUIDs, missing required fields)
- **Request body validation tests** (field lengths, data types, constraints)
- **Response schema validation tests** using Zod schemas
- **Authentication/authorization tests** where applicable
- **Error scenario tests** (404, 400, 401, 403, 500 status codes)

## Step-by-Step Implementation Process

### Step 1: Design API Contract
1. Define request/response structure
2. Identify validation requirements
3. Consider security implications
4. Plan error scenarios

### Step 2: Create Zod Schemas
1. Add schemas to `/backend/src/schemas/api.schemas.ts`
2. Follow existing naming conventions: `[Action][Resource][Type]Schema`
3. Include comprehensive validation rules
4. Add schemas to `APISchemas` export object

### Step 3: Implement Route Handler
1. Add route to appropriate router file
2. Apply authentication middleware
3. Apply validation middleware with request/response schemas
4. Implement controller following standardized response format

### Step 4: Write Comprehensive Tests
1. Create test file following pattern: `/backend/src/__tests__/[domain]-[feature].test.ts`
2. Include all validation scenarios
3. Test authentication and authorization
4. Verify error handling

### Step 5: Update Documentation
1. Run documentation generation: `npm run generate:docs`
2. Verify endpoint appears in generated documentation
3. Update any relevant evergreen documentation

## Automation Tools Available

### For New Endpoint Creation
```bash
npm run add:endpoint  # Interactive endpoint generator with validation boilerplate
```

### For Validation and Monitoring
```bash
npm run validate:schemas      # Validate all Zod schemas
npm run analyze:api-coverage  # Check validation coverage
npm run generate:docs         # Update API documentation
```

### For Testing
```bash
npm test                      # Run all tests including new endpoint tests
npm run type-check           # Verify TypeScript compilation
```

## Quality Gates and Review Process

### Before Code Review
**✅ Developer Checklist:**
- [ ] Zod schemas created and exported
- [ ] Validation middleware applied to route
- [ ] Controller returns standardized response format
- [ ] Comprehensive tests written and passing
- [ ] Documentation generated and updated
- [ ] No TypeScript compilation errors

### During Code Review
**✅ Reviewer Checklist:**
- [ ] Validation schemas follow established patterns
- [ ] Security considerations addressed (input sanitization, authorization)
- [ ] Error handling is comprehensive and user-friendly
- [ ] Tests cover edge cases and security scenarios
- [ ] Documentation is accurate and complete

### Before Deployment
**✅ Final Verification:**
- [ ] All tests passing including new endpoint tests
- [ ] API coverage analysis shows increased validation coverage
- [ ] Performance impact assessed (validation overhead <5ms)
- [ ] Security review completed for external-facing endpoints

## Common Patterns and Examples

### Standard CRUD Operations
Refer to existing implementations:
- **GET endpoints**: `/api/audits` (list) and `/api/audits/:id` (single)
- **POST endpoints**: `/api/audits` (create)
- **PUT endpoints**: `/api/audits/:id` (update)
- **DELETE endpoints**: Follow pattern in external access management

### Security-Critical Endpoints
Reference external portal endpoints for:
- Input sanitization patterns
- Access control validation
- Error handling that doesn't leak sensitive information

### File Operations
Reference PDF generation endpoints for:
- File validation (filename, type, size)
- Path traversal prevention
- Secure file handling

## Migration of Existing Endpoints

For updating existing endpoints without validation:

1. **Refer to Migration Guide**: `/documentation/reference/API_ENDPOINT_MIGRATION_GUIDE.md`
2. **Follow Tier-Based Approach**: Use roadmap in `/documentation/planning/future/API_VALIDATION_ROADMAP.md`
3. **Use Coverage Analysis**: `npm run analyze:api-coverage` to prioritize endpoints

## Monitoring and Maintenance

### Monthly Tasks
- [ ] Run `npm run analyze:api-coverage` to track progress
- [ ] Review validation performance impact
- [ ] Update documentation with any new patterns

### Quarterly Tasks  
- [ ] Review and update this process document
- [ ] Assess need for new automation tools
- [ ] Evaluate schema patterns for improvements

## See Also

- `/documentation/reference/API_ENDPOINT_MIGRATION_GUIDE.md` - Detailed migration procedures
- `/documentation/reference/TYPE_SAFETY_IMPLEMENTATION_SUMMARY.md` - Project overview and achievements
- `/documentation/planning/future/API_VALIDATION_ROADMAP.md` - Roadmap for remaining endpoints
- `/documentation/technical/backend/api/api-documentation.md` - Generated API documentation

## Success Metrics

**Target Goals:**
- **100% validation coverage** for all new endpoints
- **<5ms validation overhead** per request
- **Zero runtime type errors** in production
- **Always up-to-date documentation** through automation

**Current Status:**
- 68/193 endpoints validated (35% coverage)
- All critical workflows and external-facing endpoints secured
- Automation tools in place for ongoing maintenance
- Clear roadmap for reaching 100% coverage

By following this process, we ensure that all future API development maintains the high standards of type safety, security, and documentation established during the comprehensive validation implementation.