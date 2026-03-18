'use client';

import { useState, useEffect } from 'react';
import { serviceAPI } from '../../../lib/api';

export default function ServicesManager() {
    const [services, setServices] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'Product' // Default type
    });

    /* Handle input changes */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }))
    };

    /* Reset form state */
    const resetForm = () => {
        setFormData({ title: '', description: '', type: 'Product' });
        setIsEditing(false);
        setShowForm(false);
    };

    /* Handle Create or Update */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return
        }

        setLoading(true);

        // START CHANGE: Logic to handle API call for either update or create
        try {
            if (isEditing) {
                console.log("Updating service:", formData._id);
                await serviceAPI.updateService(formData, formData._id);
            } else {
                await serviceAPI.createService(formData);
            }
            alert(`Service ${isEditing ? 'updated' : 'created'} successfully!`);
            resetForm();
            fetchServices(); //refresh the list after opetarion
        } catch (error) {
            alert("Operation failed: " + error.message);
        } finally {
            setLoading(false);
        }
        // END CHANGE
    };

    /* Prepare form for editing */
    const handleEdit = (service) => {
        setFormData(service);
        setIsEditing(true);
        setShowForm(true);
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Username validation
        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        } else if (formData.title.length < 4) {
            newErrors.title = 'Title must be at least 4 characters';
        } else if (formData.title.length > 30) {
            newErrors.title = 'Title must be less than 30 characters';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        } else if (formData.description.length < 20) {
            newErrors.description = 'Description must be at least 20 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const fetchServices = async () => {
        try {
            const response = await serviceAPI.getAllServices();
            setServices(response);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        }
    }

    const handleDelete = async (serviceId) => {
        try {
            await serviceAPI.deleteService(serviceId)
            alert("Successfully deleted the service")
            fetchServices()
        } catch (error) {
            alert("Unable to delete the service" + error)
            console.error("Failed to Delete the service:", error);
        }
    }

    const handleDeleteConfirmation = (service) => {
        window.confirm(`Are you sure you want to delete the service: ${service.title}?`) && handleDelete(service._id)
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Available Services</h3>
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        + Add New Service
                    </button>
                )}
            </div>

            {/* Service Form Section (Create/Edit) */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-in fade-in duration-300">
                    <h4 className="text-md font-semibold mb-4 text-gray-700">
                        {isEditing ? 'Edit Service' : 'Create New Service'}
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="e.g. AI Service"
                                    required
                                />
                                {errors.title && (
                                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                >
                                    <option value="Product">Product</option>
                                    <option value="Manpower">Manpower</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Describe the service..."
                                required
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                            )}
                        </div>
                        <div className="flex space-x-3 justify-end">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
                            >
                                {loading ? 'Saving...' : isEditing ? 'Update Service' : 'Save Service'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {services.map((service, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{service.type}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">{service.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="text-blue-600 hover:text-blue-900 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteConfirmation(service)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}