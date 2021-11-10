export class MatPasswordStrengthValidator {
    isUndefinedOrEmpty(control) {
        if (!control || !control.value || control.value.length === 0) {
            return undefined;
        }
    }
    validate(criteria, regex) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (!regex.test(control.value)) {
                const failed = {};
                failed[criteria] = {
                    actualValue: control.value,
                    requiredPattern: regex
                };
                return failed;
            }
            return undefined;
        };
        return validator;
    }
    confirm(password) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (control.value !== password) {
                return {
                    notConfirmed: {
                        password: password,
                        passwordConfirmation: control.value
                    }
                };
            }
            return undefined;
        };
        return validator;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL3ZhbGlkYXRvci9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyw0QkFBNEI7SUFFdkMsa0JBQWtCLENBQUMsT0FBd0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFLEtBQWE7UUFDdEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUF3QixFQUEwQixFQUFFO1lBQ3JFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUNqQixXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSxLQUFLO2lCQUN2QixDQUFDO2dCQUNGLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQWdCO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBd0IsRUFBMEIsRUFBRTtZQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsT0FBTztvQkFDTCxZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxLQUFLO3FCQUNwQztpQkFDRixDQUFBO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yIHtcclxuXHJcbiAgaXNVbmRlZmluZWRPckVtcHR5KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IGFueSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIWNvbnRyb2wgfHwgIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGNyaXRlcmlhOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHApOiBWYWxpZGF0b3JGbiB7XHJcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgIHRoaXMuaXNVbmRlZmluZWRPckVtcHR5KGNvbnRyb2wpO1xyXG4gICAgICBpZiAoIXJlZ2V4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBmYWlsZWQgPSB7fTtcclxuICAgICAgICBmYWlsZWRbY3JpdGVyaWFdID0ge1xyXG4gICAgICAgICAgYWN0dWFsVmFsdWU6IGNvbnRyb2wudmFsdWUsXHJcbiAgICAgICAgICByZXF1aXJlZFBhdHRlcm46IHJlZ2V4XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZmFpbGVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHZhbGlkYXRvcjtcclxuICB9XHJcblxyXG4gIGNvbmZpcm0ocGFzc3dvcmQ6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuICAgICAgdGhpcy5pc1VuZGVmaW5lZE9yRW1wdHkoY29udHJvbCk7XHJcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBub3RDb25maXJtZWQ6IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogY29udHJvbC52YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB2YWxpZGF0b3I7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=