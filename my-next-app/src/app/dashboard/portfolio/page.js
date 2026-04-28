'use client';
import { useState, useEffect } from 'react';
import { portfolioApi } from '../../../lib/api';

export default function PortfolioManager() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [profolios, setPortfolios] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [objectUrl, setObjectUrl] = useState("")

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        tags: '',
        project_link: ''
    });

    /* Handle input changes */
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name == "image") {
            value = e.target.files?.[0];
            const url = URL.createObjectURL(value);
            setObjectUrl(url)
        }
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

        try {
            let requestPayload = new FormData()

            requestPayload.append("title", formData.title)
            requestPayload.append("description", formData.description)
            requestPayload.append("tags", formData.tags)
            requestPayload.append("project_link", formData.project_link)
            if (typeof formData.image === "object") {
                requestPayload.append("image", formData.image)
            }

            if (isEditing) {
                await portfolioApi.updatePortfolio(requestPayload, formData._id);
            } else {
                await portfolioApi.createPortfolio(requestPayload);
            }

            alert(`Service ${isEditing ? 'updated' : 'created'} successfully!`);
            resetForm();
            fetchprofolios();
        } catch (error) {
            alert("Operation failed: " + error.message);
        } finally {
            setLoading(false);
        }
        // END CHANGE
    };

    /* Prepare form for editing */
    const handleEdit = (portfolio) => {
        setFormData(portfolio);
        if (portfolio.image) {
            setObjectUrl(`${API_URL}/uploads/${portfolio.image}`)
        }
        setIsEditing(true);
        setShowForm(true);
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

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

    const fetchprofolios = async () => {
        try {
            const response = await portfolioApi.getAllPortfolio();
            setPortfolios(response);
        } catch (error) {
            console.error("Failed to fetch profolios:", error);
        }
    }

    const handleDelete = async (serviceId) => {
        try {
            await portfolioApi.deletePortfolio(serviceId)
            alert("Successfully deleted the service")
            fetchprofolios()
        } catch (error) {
            alert("Unable to delete the service" + error)
            console.error("Failed to Delete the service:", error);
        }
    }

    const handleDeleteConfirmation = (service) => {
        window.confirm(`Are you sure you want to delete the service: ${service.title}?`) && handleDelete(service._id)
    }

    useEffect(() => {
        fetchprofolios();
    }, [])

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                    Available portfolios
                </h3>

                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        + Add New Portfolio
                    </button>
                )}
            </div>

            {/* FORM */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-in fade-in duration-300">

                    <h4 className="text-md font-semibold mb-4 text-gray-700">
                        {isEditing ? 'Edit Portfolio' : 'Create New Portfolio'}
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
                                    required
                                />
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
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                            <input
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                            <input
                                name="project_link"
                                value={formData.project_link}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Image</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />

                            {objectUrl && (
                                <img
                                    alt="portfolio"
                                    src={objectUrl}
                                    className="w-24 h-24 mt-2 object-cover rounded"
                                />
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

            {/* TABLE */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">

                <table className="w-full table-auto divide-y divide-gray-200">

                    {/* HEAD */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Image
                            </th>

                            <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Title
                            </th>

                            <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Tags
                            </th>

                            <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">
                                Description
                            </th>

                            <th className="px-3 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="bg-white divide-y divide-gray-200">

                        {profolios.map((portfolio, index) => (
                            <tr key={index}>

                                {/* IMAGE */}
                                <td className="px-3 md:px-6 py-4">
                                    {portfolio.image && (
                                        <img
                                            src={`${API_URL}/uploads/${portfolio.image}`}
                                            alt="portfolio"
                                            className="w-12 h-12 md:w-20 md:h-20 object-cover"
                                        />
                                    )}
                                </td>

                                {/* TITLE */}
                                <td className="px-3 md:px-6 py-4 text-sm font-medium text-gray-900">
                                    {portfolio.title}
                                </td>

                                {/* TAGS (hidden mobile/tablet) */}
                                <td className="px-3 md:px-6 py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {portfolio.tags && portfolio.tags.split(",").map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                {/* DESCRIPTION (hidden until large screens) */}
                                <td className="px-3 md:px-6 py-4 text-sm text-gray-500 truncate max-w-xs hidden lg:table-cell">
                                    {portfolio.description}
                                </td>

                                {/* ACTIONS */}
                                <td className="px-3 md:px-6 py-4 text-right text-sm font-medium">
                                    <div className="flex flex-wrap justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(portfolio)}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDeleteConfirmation(portfolio)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </div>
    );
}